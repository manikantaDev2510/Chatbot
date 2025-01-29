import React, { useState } from 'react';

const SetupOrganization = () => {
  const [formData, setFormData] = useState({ companyName: '', website: '', description: '' });

  const fetchMetaDescription = () => {
    // Simulate fetching meta description
    setFormData({ ...formData, description: 'Sample meta description from website.' });
  };

  return (
    <div className="p-6">
      <h1>Setup Organization</h1>
      <form>
        <input
          type="text"
          placeholder="Company Name"
          value={formData.companyName}
          onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
          required
        />
        <input
          type="url"
          placeholder="Website URL"
          value={formData.website}
          onChange={(e) => setFormData({ ...formData, website: e.target.value })}
          required
        />
        <button type="button" onClick={fetchMetaDescription}>
          Fetch Meta Description
        </button>
        <textarea
          placeholder="Company Description"
          value={formData.description}
          readOnly
        ></textarea>
      </form>
    </div>
  );
};

export default SetupOrganization;
