"use client";
import JobPagination from "@/app/jobs/JobPagination";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import { sampleJobs } from "@/constants";
import React, { useState } from "react";

const Jobs = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [locationFilter, setLocationFilter] = useState("");

  // Filtered jobs based on search term and location
  const filteredJobs = sampleJobs.filter((job) => {
    return (
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (job.location.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (locationFilter === "" ||
          job.location.toLowerCase().includes(locationFilter.toLowerCase())))
    );
  });

  const jobLocations = sampleJobs.filter(({ location }) => {
    return location.toLowerCase();
  });

  return (
    <>
      <Nav activeSection="Jobs" />

      <section className="mb-20 flex flex-col gap-7 container mx-auto">
        <h1 className="text-4xl font-semibold text-center mx-auto">
          Join Our Team
        </h1>

        <p className="text-gray-500 font-normal leading-relaxed text-center text-lg">
          We're looking for talented individuals to join our team and help us
          achieve our mission.
        </p>

        {/* Filter and Search */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 place-items-center">
          <input
            type="text"
            placeholder="Search jobs by title or location"
            className="border border-gray-300 rounded-md py-3 px-4 mb-4 w-full"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          <select
            className="border border-gray-300 rounded-md py-3 px-4 mb-4 w-full"
            value={locationFilter}
            onChange={(e) => setLocationFilter(e.target.value)}
          >
            <option value="">All Locations</option>
            {jobLocations.map((location, index) => (
              <option
                className="capitalize"
                key={index}
                value={location.location}
              >
                {location.location}
              </option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredJobs.map((job, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold mb-2">{job.title}</h2>
              <p>
                <strong>Location:</strong> {job.location}
              </p>
              <p>
                <strong>Type:</strong> {job.type}
              </p>
              <p>
                <strong>Posted:</strong> {job.datePosted}
              </p>
              <p className="mt-4 text-gray-500 text-sm">{job.description}</p>

              <button className="bg-primaryColor hover:scale-105 transition text-white font-bold py-2 px-4 rounded mt-4">
                Apply Now
              </button>
            </div>
          ))}
        </div>

        <JobPagination />
      </section>

      <Footer />
    </>
  );
};

export default Jobs;
