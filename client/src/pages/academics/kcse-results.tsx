import PageHeader from "@/components/common/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import MainLayout from "@/layouts/MainLayout";

// Mock KCSE results data - replace with real data from API when available
const kcseMeanScoreData = [
  { year: 2024, meanScore: 9.42 },
  { year: 2023, meanScore: 9.31 },
  { year: 2022, meanScore: 9.16 },
  { year: 2021, meanScore: 9.03 },
  { year: 2020, meanScore: 8.95 },
  { year: 2019, meanScore: 8.87 },
  { year: 2018, meanScore: 8.72 },
  { year: 2017, meanScore: 8.65 },
];

// Mock KCSE university admission data - replace with real data from API when available
const universityAdmissionData = [
  { year: 2024, percentage: 98 },
  { year: 2023, percentage: 96 },
  { year: 2022, percentage: 95 },
  { year: 2021, percentage: 94 },
  { year: 2020, percentage: 93 },
  { year: 2019, percentage: 91 },
  { year: 2018, percentage: 90 },
  { year: 2017, percentage: 89 },
];

// Mock KCSE grade distribution - replace with real data from API when available
const gradeDistributionData = [
  { year: 2024, "A": 22, "A-": 35, "B+": 48, "B": 40, "B-": 22, "C+": 15, "C": 8, "C-": 5, "D+": 3, "D": 2, "D-": 0, "E": 0, "Total": 200 },
  { year: 2023, "A": 20, "A-": 32, "B+": 45, "B": 38, "B-": 25, "C+": 18, "C": 10, "C-": 7, "D+": 4, "D": 1, "D-": 0, "E": 0, "Total": 200 },
  { year: 2022, "A": 18, "A-": 30, "B+": 42, "B": 35, "B-": 28, "C+": 20, "C": 12, "C-": 8, "D+": 5, "D": 2, "D-": 0, "E": 0, "Total": 200 },
  { year: 2021, "A": 15, "A-": 28, "B+": 40, "B": 38, "B-": 30, "C+": 22, "C": 15, "C-": 8, "D+": 3, "D": 1, "D-": 0, "E": 0, "Total": 200 },
  { year: 2020, "A": 14, "A-": 26, "B+": 38, "B": 36, "B-": 32, "C+": 25, "C": 16, "C-": 9, "D+": 3, "D": 1, "D-": 0, "E": 0, "Total": 200 },
];

// Mock subject mean scores - replace with real data from API when available
const subjectMeanScoreData = [
  { subject: "Mathematics", "2024": 8.9, "2023": 8.7, "2022": 8.5, "2021": 8.3, "2020": 8.1 },
  { subject: "English", "2024": 9.1, "2023": 9.0, "2022": 8.8, "2021": 8.6, "2020": 8.5 },
  { subject: "Kiswahili", "2024": 9.3, "2023": 9.1, "2022": 8.9, "2021": 8.7, "2020": 8.6 },
  { subject: "Biology", "2024": 9.2, "2023": 9.0, "2022": 8.8, "2021": 8.7, "2020": 8.5 },
  { subject: "Chemistry", "2024": 8.8, "2023": 8.6, "2022": 8.4, "2021": 8.3, "2020": 8.1 },
  { subject: "Physics", "2024": 9.0, "2023": 8.8, "2022": 8.6, "2021": 8.4, "2020": 8.2 },
  { subject: "History", "2024": 9.4, "2023": 9.2, "2022": 9.0, "2021": 8.8, "2020": 8.6 },
  { subject: "Geography", "2024": 9.3, "2023": 9.1, "2022": 8.9, "2021": 8.7, "2020": 8.5 },
  { subject: "Business Studies", "2024": 9.2, "2023": 9.0, "2022": 8.8, "2021": 8.6, "2020": 8.4 },
  { subject: "Computer Studies", "2024": 9.5, "2023": 9.3, "2022": 9.1, "2021": 8.9, "2020": 8.7 },
];

const KCSEResults = () => {
  return (
    <MainLayout>
      <PageHeader
        title="KCSE Yearly Results"
        description="Our consistent academic excellence and performance in KCSE examinations"
        backgroundImage="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
      />

      <div className="container py-8 md:py-12">
        <div className="max-w-3xl mx-auto mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Academic Excellence at Tumaini Kiage Boys High School</h2>
          <p className="text-gray-700 mb-4">
            At Tumaini Kiage Boys High School, we take pride in our consistent academic excellence. Our KCSE results over the years demonstrate our commitment to providing quality education and nurturing well-rounded students who excel academically.
          </p>
          <p className="text-gray-700">
            Our dedicated teaching staff, rigorous academic programs, and supportive learning environment have contributed to our outstanding performance in national examinations. Below is a summary of our KCSE performance over the past several years.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 mb-12">
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-bold mb-4">Mean Grade Progression</h3>
              <p className="text-sm text-gray-500 mb-4">Our school's mean score has consistently improved over the years</p>
              <div className="h-72">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={kcseMeanScoreData}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="year" />
                    <YAxis domain={[8, 10]} />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="meanScore" name="Mean Score" fill="var(--color-olive-500)" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-bold mb-4">University Admission Rate</h3>
              <p className="text-sm text-gray-500 mb-4">Percentage of students who qualified for university admission</p>
              <div className="h-72">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={universityAdmissionData}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="year" />
                    <YAxis domain={[80, 100]} />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="percentage" name="Admission Rate (%)" fill="var(--color-olive-300)" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="mb-12">
          <CardContent className="pt-6">
            <h3 className="text-xl font-bold mb-4">KCSE Grade Distribution</h3>
            <p className="text-sm text-gray-500 mb-4">Number of students per grade in recent years</p>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Year</TableHead>
                    <TableHead className="text-center">A</TableHead>
                    <TableHead className="text-center">A-</TableHead>
                    <TableHead className="text-center">B+</TableHead>
                    <TableHead className="text-center">B</TableHead>
                    <TableHead className="text-center">B-</TableHead>
                    <TableHead className="text-center">C+</TableHead>
                    <TableHead className="text-center">C</TableHead>
                    <TableHead className="text-center">C-</TableHead>
                    <TableHead className="text-center">D+</TableHead>
                    <TableHead className="text-center">D</TableHead>
                    <TableHead className="text-center">D-</TableHead>
                    <TableHead className="text-center">E</TableHead>
                    <TableHead className="text-center">Total</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {gradeDistributionData.map((row) => (
                    <TableRow key={row.year}>
                      <TableCell className="font-medium">{row.year}</TableCell>
                      <TableCell className="text-center">{row['A']}</TableCell>
                      <TableCell className="text-center">{row['A-']}</TableCell>
                      <TableCell className="text-center">{row['B+']}</TableCell>
                      <TableCell className="text-center">{row['B']}</TableCell>
                      <TableCell className="text-center">{row['B-']}</TableCell>
                      <TableCell className="text-center">{row['C+']}</TableCell>
                      <TableCell className="text-center">{row['C']}</TableCell>
                      <TableCell className="text-center">{row['C-']}</TableCell>
                      <TableCell className="text-center">{row['D+']}</TableCell>
                      <TableCell className="text-center">{row['D']}</TableCell>
                      <TableCell className="text-center">{row['D-']}</TableCell>
                      <TableCell className="text-center">{row['E']}</TableCell>
                      <TableCell className="text-center font-bold">{row['Total']}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <h3 className="text-xl font-bold mb-4">Subject Performance</h3>
            <p className="text-sm text-gray-500 mb-4">Mean scores by subject over the last five years</p>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Subject</TableHead>
                    <TableHead className="text-center">2024</TableHead>
                    <TableHead className="text-center">2023</TableHead>
                    <TableHead className="text-center">2022</TableHead>
                    <TableHead className="text-center">2021</TableHead>
                    <TableHead className="text-center">2020</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {subjectMeanScoreData.map((row) => (
                    <TableRow key={row.subject}>
                      <TableCell className="font-medium">{row.subject}</TableCell>
                      <TableCell className="text-center">{row['2024']}</TableCell>
                      <TableCell className="text-center">{row['2023']}</TableCell>
                      <TableCell className="text-center">{row['2022']}</TableCell>
                      <TableCell className="text-center">{row['2021']}</TableCell>
                      <TableCell className="text-center">{row['2020']}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
};

export default KCSEResults;