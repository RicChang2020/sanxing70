import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ExternalLink, Image as ImageIcon } from "lucide-react";
import { alumniPhotos } from "@/data/alumniPhotos";

interface AlumniPhotoSelectorProps {
  className?: string;
}

export default function AlumniPhotoSelector({ className }: AlumniPhotoSelectorProps) {
  const [selectedGrade, setSelectedGrade] = useState<string>("");
  const [selectedClass, setSelectedClass] = useState<string>("");

  // Get available grades from alumniPhotos
  const availableGrades = Object.keys(alumniPhotos).sort((a, b) => parseInt(a) - parseInt(b));

  // Get available classes for selected grade
  const availableClasses = selectedGrade && alumniPhotos[selectedGrade as keyof typeof alumniPhotos]
    ? Object.keys(alumniPhotos[selectedGrade as keyof typeof alumniPhotos]).sort((a, b) => parseInt(a) - parseInt(b))
    : [];

  // Get photo URL for selected grade and class
  const photoUrl: string | null = selectedGrade && selectedClass
    ? (alumniPhotos[selectedGrade as keyof typeof alumniPhotos]?.[selectedClass as keyof typeof alumniPhotos[keyof typeof alumniPhotos]] as string | undefined) || null
    : null;

  const handleGradeChange = (grade: string) => {
    setSelectedGrade(grade);
    setSelectedClass("");
  };

  const handleReset = () => {
    setSelectedGrade("");
    setSelectedClass("");
  };

  return (
    <div className={`bg-white rounded-xl shadow-sm p-6 border border-slate-200 ${className || ""}`}>
      <div className="flex items-center gap-2 mb-4">
        <ImageIcon className="w-5 h-5 text-blue-600" />
        <h2 className="text-lg font-semibold text-slate-900">校友照片選擇器</h2>
      </div>

      {/* Grade Selection */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-slate-700 mb-2">
          選擇屆別
        </label>
        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-2">
          {availableGrades.map((grade) => (
            <button
              key={grade}
              onClick={() => handleGradeChange(grade)}
              className={`py-2 px-3 rounded-lg font-medium transition-all text-sm ${
                selectedGrade === grade
                  ? "bg-blue-600 text-white shadow-md"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              {grade}
            </button>
          ))}
        </div>
      </div>

      {/* Class Selection */}
      {selectedGrade && (
        <div className="mb-4">
          <label className="block text-sm font-medium text-slate-700 mb-2">
            選擇班級
          </label>
          <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-2">
            {availableClasses.map((classNum) => (
              <button
                key={classNum}
                onClick={() => setSelectedClass(classNum)}
                className={`py-2 px-3 rounded-lg font-medium transition-all text-sm ${
                  selectedClass === classNum
                    ? "bg-blue-600 text-white shadow-md"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                {classNum}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Photo Display */}
      {photoUrl && (
        <div className="mt-6">
          <Card className="overflow-hidden border-0 shadow-lg">
            <div className="relative aspect-video bg-gradient-to-br from-slate-100 to-slate-200">
              <iframe
                src={photoUrl.replace('/view?', '/preview?')}
                className="w-full h-full"
                allow="autoplay"
                title={`第${selectedGrade}屆-${selectedClass}班`}
              />
            </div>
            <div className="p-4 bg-white flex items-center justify-between">
              <div>
                <p className="text-lg font-semibold text-slate-900">
                  第{selectedGrade}屆 - {selectedClass}班
                </p>
                <p className="text-sm text-slate-600">
                  點擊右側按鈕在新視窗查看完整照片
                </p>
              </div>
              <a
                href={photoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                開啟原圖
              </a>
            </div>
          </Card>
        </div>
      )}

      {/* Reset Button */}
      {(selectedGrade || selectedClass) && (
        <div className="mt-4 flex justify-center">
          <Button
            onClick={handleReset}
            variant="outline"
            className="border-slate-300 text-slate-700 hover:bg-slate-50"
          >
            重新選擇
          </Button>
        </div>
      )}

      {/* Empty State */}
      {!selectedGrade && (
        <div className="mt-6 p-8 bg-slate-50 rounded-lg text-center">
          <ImageIcon className="w-12 h-12 mx-auto mb-3 text-slate-400" />
          <p className="text-slate-600">請選擇屆別以查看可用的班級照片</p>
        </div>
      )}
    </div>
  );
}
