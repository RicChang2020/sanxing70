import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { BookOpen, ExternalLink, ChevronDown } from "lucide-react";
import FilterForm from "@/components/FilterForm";

interface Photo {
  id: string;
  link: string;
}

interface GradeData {
  grade: number;
  name: string;
  photos: Photo[];
}

export default function Alumni() {
  const [alumniData, setAlumniData] = useState<Record<string, GradeData>>({});
  const [classInfo, setClassInfo] = useState<Record<string, string[]>>({});
  const [selectedGrade, setSelectedGrade] = useState<string>("12");
  const [selectedClass, setSelectedClass] = useState<string>("");
  const [filteredPhotos, setFilteredPhotos] = useState<Photo[]>([]);
  const [loading, setLoading] = useState(true);
  const [isFiltering, setIsFiltering] = useState(false);
  const [expandedGrade, setExpandedGrade] = useState<string>("12");

  useEffect(() => {
    // 載入校友資料和班級資訊
    Promise.all([
      fetch("/alumni-data.json").then((res) => res.json()),
      fetch("/class-info.json").then((res) => res.json()),
    ])
      .then(([alumni, classes]) => {
        setAlumniData(alumni);
        setClassInfo(classes);
        setLoading(false);
      })
      .catch((err) => {
        console.error("載入資料失敗:", err);
        setLoading(false);
      });
  }, []);

  const grades = Object.keys(alumniData).sort((a, b) => parseInt(a) - parseInt(b));
  const currentGrade = alumniData[selectedGrade];

  const handleFilter = (grade: string, className: string) => {
    if (!grade || !className) {
      // 重設篩選
      setSelectedGrade(grades[0] || "12");
      setSelectedClass("");
      setIsFiltering(false);
      setFilteredPhotos([]);
      return;
    }

    setSelectedGrade(grade);
    setSelectedClass(className);
    setIsFiltering(true);

    // 根據班級篩選照片
    if (alumniData[grade]) {
      const filtered = alumniData[grade].photos.filter((photo) => {
        const photoId = String(photo.id);
        return photoId.includes(className);
      });
      setFilteredPhotos(filtered);
    }
  };

  const handleGradeChange = (grade: string) => {
    setSelectedGrade(grade);
    setExpandedGrade(grade);
    setSelectedClass("");
    setIsFiltering(false);
    setFilteredPhotos([]);
  };

  const displayPhotos = isFiltering ? filteredPhotos : currentGrade?.photos || [];

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="text-center">
          <BookOpen className="w-16 h-16 mx-auto mb-4 animate-pulse text-blue-600" />
          <p className="text-lg text-slate-600">載入中...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12 mb-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <BookOpen className="w-10 h-10" />
            <h1 className="text-4xl font-bold">校友畢業紀念冊</h1>
          </div>
          <p className="text-blue-100 text-lg">
            {isFiltering
              ? `第${selectedGrade}屆 - ${selectedClass}班 (${displayPhotos.length} 張照片)`
              : `第${selectedGrade}屆 (${displayPhotos.length} 張照片)`}
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 pb-12">
        {/* 篩選表單 */}
        <div className="mb-8">
          <FilterForm
            grades={grades}
            classInfo={classInfo}
            onFilter={handleFilter}
          />
        </div>

        {/* 屆別快速選擇 */}
        <div className="mb-8 bg-white rounded-xl shadow-sm p-6 border border-slate-200">
          <h2 className="text-lg font-semibold text-slate-900 mb-4">快速選擇屆別</h2>
          <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2">
            {grades.map((grade) => (
              <button
                key={grade}
                onClick={() => handleGradeChange(grade)}
                className={`py-2 px-3 rounded-lg font-medium transition-all text-sm ${
                  selectedGrade === grade
                    ? "bg-blue-600 text-white shadow-md scale-105"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                {grade}
              </button>
            ))}
          </div>
        </div>

        {/* 照片網格 */}
        {displayPhotos.length > 0 ? (
          <div>
            <div className="mb-6 flex items-center justify-between">
              <div>
                <h2 className="text-3xl font-bold text-slate-900">
                  {isFiltering ? `${selectedClass}班` : `第${selectedGrade}屆`}
                </h2>
                <p className="text-slate-600 mt-1">
                  共 {displayPhotos.length} 張照片
                </p>
              </div>
              {isFiltering && (
                <Button
                  onClick={() => {
                    setSelectedClass("");
                    setIsFiltering(false);
                    setFilteredPhotos([]);
                  }}
                  variant="outline"
                  className="border-blue-300 text-blue-600 hover:bg-blue-50"
                >
                  清除篩選
                </Button>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {displayPhotos.map((photo) => (
                <Card
                  key={photo.id}
                  className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 bg-white group cursor-pointer"
                >
                  <div className="relative aspect-square bg-gradient-to-br from-slate-100 to-slate-200 overflow-hidden">
                    <img
                      src={photo.link}
                      alt={photo.id}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                      <a
                        href={photo.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-white text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink className="w-4 h-4" />
                        查看原圖
                      </a>
                    </div>
                  </div>
                  <div className="p-3 bg-white">
                    <p className="text-sm font-semibold text-slate-900 text-center truncate">
                      {photo.id}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-16 bg-white rounded-xl border-2 border-dashed border-slate-300">
            <BookOpen className="w-16 h-16 text-slate-300 mb-4" />
            <p className="text-lg text-slate-600 mb-2">
              {isFiltering ? "該班級無照片資料" : "此屆別尚無照片資料"}
            </p>
            <p className="text-sm text-slate-500">
              {isFiltering
                ? "請選擇其他班級查看照片"
                : "請選擇其他屆別查看照片"}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
