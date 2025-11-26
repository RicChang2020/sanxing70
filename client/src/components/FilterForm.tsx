import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface FilterFormProps {
  grades: string[];
  classInfo: Record<string, string[]>;
  onFilter: (grade: string, className: string) => void;
}

export default function FilterForm({ grades, classInfo, onFilter }: FilterFormProps) {
  const [selectedGrade, setSelectedGrade] = useState<string>(grades[0] || '');
  const [selectedClass, setSelectedClass] = useState<string>('');
  const [availableClasses, setAvailableClasses] = useState<string[]>([]);

  useEffect(() => {
    if (selectedGrade && classInfo[selectedGrade]) {
      const classes = classInfo[selectedGrade];
      setAvailableClasses(classes);
      setSelectedClass(classes[0] || '');
    } else {
      setAvailableClasses([]);
      setSelectedClass('');
    }
  }, [selectedGrade, classInfo]);

  const handleFilter = () => {
    if (selectedGrade && selectedClass) {
      onFilter(selectedGrade, selectedClass);
    }
  };

  const handleReset = () => {
    setSelectedGrade(grades[0] || '');
    setSelectedClass('');
    onFilter('', '');
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-6 border border-gray-200">
      <h2 className="text-lg font-semibold mb-4 text-gray-800">篩選照片</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* 屆別選擇 */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            選擇屆別
          </label>
          <Select value={selectedGrade} onValueChange={setSelectedGrade}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="選擇屆別" />
            </SelectTrigger>
            <SelectContent>
              {grades.map((grade) => (
                <SelectItem key={grade} value={grade}>
                  第{grade}屆
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* 班級選擇 */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            選擇班級
          </label>
          <Select value={selectedClass} onValueChange={setSelectedClass}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="選擇班級" />
            </SelectTrigger>
            <SelectContent>
              {availableClasses.map((className) => (
                <SelectItem key={className} value={className}>
                  {className}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* 按鈕 */}
        <div className="flex items-end gap-2">
          <Button
            onClick={handleFilter}
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white"
          >
            篩選
          </Button>
          <Button
            onClick={handleReset}
            variant="outline"
            className="flex-1"
          >
            重設
          </Button>
        </div>
      </div>
    </div>
  );
}
