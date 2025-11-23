import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Filter } from "lucide-react";

interface FilterFormProps {
  grades: string[];
  classInfo: Record<string, string[]>;
  onFilter: (grade: string, className: string) => void;
}

export default function FilterForm({ grades, classInfo, onFilter }: FilterFormProps) {
  const [selectedGrade, setSelectedGrade] = useState<string>("");
  const [selectedClass, setSelectedClass] = useState<string>("");

  const handleGradeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const grade = e.target.value;
    setSelectedGrade(grade);
    setSelectedClass("");
  };

  const handleClassChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedClass(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onFilter(selectedGrade, selectedClass);
  };

  const handleReset = () => {
    setSelectedGrade("");
    setSelectedClass("");
    onFilter("", "");
  };

  const availableClasses = selectedGrade ? classInfo[selectedGrade] || [] : [];

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-sm p-6 border border-slate-200">
      <div className="flex items-center gap-2 mb-4">
        <Filter className="w-5 h-5 text-blue-600" />
        <h2 className="text-lg font-semibold text-slate-900">篩選條件</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label htmlFor="grade" className="block text-sm font-medium text-slate-700 mb-2">
            選擇屆別
          </label>
          <select
            id="grade"
            value={selectedGrade}
            onChange={handleGradeChange}
            className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">請選擇屆別</option>
            {grades.map((grade) => (
              <option key={grade} value={grade}>
                第{grade}屆
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="class" className="block text-sm font-medium text-slate-700 mb-2">
            選擇班級
          </label>
          <select
            id="class"
            value={selectedClass}
            onChange={handleClassChange}
            disabled={!selectedGrade}
            className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-slate-100 disabled:cursor-not-allowed"
          >
            <option value="">請選擇班級</option>
            {availableClasses.map((className) => (
              <option key={className} value={className}>
                {className}班
              </option>
            ))}
          </select>
        </div>

        <div className="flex items-end gap-2">
          <Button
            type="submit"
            disabled={!selectedGrade || !selectedClass}
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white"
          >
            套用篩選
          </Button>
          <Button
            type="button"
            onClick={handleReset}
            variant="outline"
            className="border-slate-300 text-slate-700 hover:bg-slate-50"
          >
            重設
          </Button>
        </div>
      </div>
    </form>
  );
}
