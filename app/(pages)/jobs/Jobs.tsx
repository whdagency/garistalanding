"use client";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import { sampleJobs } from "@/constants";
import React, { useEffect, useState } from "react";

const Jobs: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [filteredJobs, setFilteredJobs] = useState<Job[]>(sampleJobs);
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 6;

  useEffect(() => {
    // change the filtered jobs based on search term and location
    const newFilteredJobs = sampleJobs.filter((job) => {
      return (
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (locationFilter === "" ||
          job.location.toLowerCase().includes(locationFilter.toLowerCase()))
      );
    });

    setFilteredJobs(newFilteredJobs);
    setCurrentPage(1); // Reset to first page when filtering changes
  }, [searchTerm, locationFilter]);

  // Pagination
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);

  // Change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
  const nextPage = () => {
    if (currentPage < Math.ceil(filteredJobs.length / jobsPerPage)) {
      setCurrentPage((prevPage) => prevPage + 1);
    } else {
      setCurrentPage(1);
    }
  };
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    } else {
      setCurrentPage(Math.ceil(filteredJobs.length / jobsPerPage));
    }
  };

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
            placeholder="Search jobs by title"
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
            {sampleJobs
              .filter((job) =>
                Array.from(new Set(job.location.toLowerCase().trim()))
              )
              .map((job, index) => (
                <option
                  className="capitalize"
                  key={index}
                  value={job.location.toLowerCase()}
                >
                  {job.location}
                </option>
              ))}
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentJobs.map((job, index) => (
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

        <div className="my-5">
          <JobPagination
            jobsPerPage={jobsPerPage}
            totalJobs={filteredJobs.length}
            paginate={paginate}
            currentPage={currentPage}
            nextPage={nextPage}
            prevPage={prevPage}
          />
        </div>
      </section>

      <Footer />
    </>
  );
};

interface JobPaginationProps {
  jobsPerPage: number;
  totalJobs: number;
  paginate: (pageNumber: number) => void;
  currentPage: number;
  nextPage: () => void;
  prevPage: () => void;
}

const JobPagination: React.FC<JobPaginationProps> = ({
  jobsPerPage,
  totalJobs,
  paginate,
  currentPage,
  nextPage,
  prevPage,
}) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalJobs / jobsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href="#"
            onClick={() => prevPage()}
            aria-disabled={currentPage === 1}
          />
        </PaginationItem>
        {pageNumbers.map((number) => (
          <PaginationItem key={number}>
            <PaginationLink
              href="#"
              onClick={() => paginate(number)}
              isActive={currentPage === number}
            >
              {number}
            </PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem>
          <PaginationNext
            href="#"
            onClick={() => nextPage()}
            aria-disabled={currentPage === Math.ceil(totalJobs / jobsPerPage)}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default Jobs;
