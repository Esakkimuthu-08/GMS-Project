import { StudentLayout } from "../../layouts/StudentLayout";
import { useState } from "react";
import { Upload, X } from "lucide-react";

export default function RaiseGrievance() {
  const [formData, setFormData] = useState({
    category: "",
    subject: "",
    description: "",
  });

  const [files, setFiles] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  const categories = [
    "Academic",
    "Attendance",
    "Facilities",
    "Staff Conduct",
    "Hostel",
    "Other",
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    if (e.target.files) {
      setFiles(Array.from(e.target.files));
    }
  };

  const removeFile = (index) => {
    setFiles(files.filter((_, i) => i !== index));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form submitted:", { formData, files });

    setSubmitted(true);

    setTimeout(() => {
      setFormData({
        category: "",
        subject: "",
        description: "",
      });
      setFiles([]);
      setSubmitted(false);
    }, 2000);
  };

  return (
    <StudentLayout>
      <div className="max-w-2xl">
        <h1 className="text-3xl font-bold text-foreground mb-2">
          Raise New Grievance
        </h1>

        <p className="text-muted-foreground mb-8">
          Please fill in the form below to submit your grievance
        </p>

        {submitted && (
          <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800">
            ✓ Grievance submitted successfully!
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-lg shadow-md border border-border p-8 space-y-6"
        >
          {/* Category */}
          <div>
            <label className="block text-sm font-semibold mb-2">
              Grievance Category <span className="text-red-500">*</span>
            </label>

            <select
              name="category"
              value={formData.category}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-2 border rounded-lg"
            >
              <option value="">Select a category</option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          {/* Subject */}
          <div>
            <label className="block text-sm font-semibold mb-2">
              Subject <span className="text-red-500">*</span>
            </label>

            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-2 border rounded-lg"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-semibold mb-2">
              Description <span className="text-red-500">*</span>
            </label>

            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              rows={6}
              required
              className="w-full px-4 py-2 border rounded-lg resize-none"
            />
          </div>

          {/* File Upload */}
          <div>
            <label className="block text-sm font-semibold mb-4">
              Attachments (Optional)
            </label>

            <div className="border-2 border-dashed rounded-lg p-6 text-center">
              <input
                type="file"
                multiple
                onChange={handleFileChange}
                className="hidden"
                id="file-input"
              />

              <label htmlFor="file-input" className="cursor-pointer">
                <Upload className="mx-auto mb-2" size={32} />
                <p>Click to upload files</p>
              </label>
            </div>

            {files.length > 0 && (
              <div className="mt-4 space-y-2">
                {files.map((file, index) => (
                  <div
                    key={index}
                    className="flex justify-between p-3 border rounded-lg"
                  >
                    <span className="text-sm">{file.name}</span>

                    <button
                      type="button"
                      onClick={() => removeFile(index)}
                    >
                      <X size={18} />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Buttons */}
          <div className="flex gap-4">
            <button
              type="submit"
              className="flex-1 px-6 py-3 bg-primary text-white rounded-lg"
            >
              Submit Grievance
            </button>

            <button
              type="reset"
              onClick={() =>
                setFormData({ category: "", subject: "", description: "" })
              }
              className="flex-1 px-6 py-3 border rounded-lg"
            >
              Clear Form
            </button>
          </div>
        </form>
      </div>
    </StudentLayout>
  );
}
