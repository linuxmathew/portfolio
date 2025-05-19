import {
  getProjectSlugs,
  getProjectBySlug,
  getAllProjectsNavigation,
} from "../services/fetchProjectData";
import React from "react";
import { FiArrowLeft, FiArrowRight, FiArrowUpRight } from "react-icons/fi";
import "./workpage.css";
import UniversalBtn from "@/app/components/buttons/UniversalBtn";
import Image from "next/image";
import PortableText from "@sanity/block-content-to-react";
import { notFound } from "next/navigation";
import { capitalizeArray } from "../../helperFunctions/capitalizeArray";
import ProjectCarousel from "./ProjectCarousel";
import SectionDivider from "@/app/components/SectionDivider";
import DemoButton from "../components/DemoBtn";
import "../styles/ProjectNavigation.css";
import Link from "next/link";

export async function generateStaticParams() {
  const slugs = await getProjectSlugs();
  return slugs;
}

export default async function ProjectPage({ params }) {
  // Log params for debugging
  const { slug } = await params;

  // Validate params.slug
  if (!slug || typeof slug !== "string") {
    console.log("Invalid slug:", slug);
    notFound();
  }

  const project = await getProjectBySlug(slug);

  const capitalizedTech = capitalizeArray(project.technologies);

  // Fetch all projects for navigation
  const allProjects = await getAllProjectsNavigation();
  const currentIndex = allProjects.findIndex((p) => p.slug === slug);
  const prevProject = currentIndex > 0 ? allProjects[currentIndex - 1] : null;
  const nextProject =
    currentIndex < allProjects.length - 1
      ? allProjects[currentIndex + 1]
      : null;

  // console.log("incoming5", project);
  if (!project) {
    console.log("Project not found for slug:", slug);
    notFound();
  }

  return (
    <>
      <div className="container workpage-wrapper">
        <div className="d-flex align-items-start align-items-md-center work-page-head">
          <p className="workpage-title">{project?.title}</p>
          {project.demoUrl && <DemoButton demoUrl={project.demoUrl} />}
        </div>
        <div className="row">
          <div className="col col-12 col-md-5 each-column">
            <p
              className="text-muted"
              style={{
                fontSize: "12px",
                fontWeight: "var(--font-weight-medium)",
              }}
            >
              ROLE/TEAM
            </p>
            <p className="role-title-desc text-muted-body">{project?.role}</p>
          </div>
          <div className="col col-12 col-md-3 each-column">
            <p className="text-muted">TIMELINE</p>
            <p className="text-muted-body">{project?.timeline}</p>
            <p className="text-muted-body">Year: {project?.year}</p>
          </div>
          <div className="col col-12 col-md-4">
            <p className="text-muted">TOOLS USED</p>
            <p className="text-muted-body">{capitalizedTech.join(", ")}</p>
          </div>
        </div>
        <div className="work-image-wrapper">
          {project.images && project.images.length > 0 && (
            <ProjectCarousel images={project.images} />
          )}

          <div className="project-desc-wrapper">
            <PortableText
              blocks={project?.description}
              projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
              dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
              serializers={{
                types: {
                  block: (props) =>
                    props.node.style === "normal" ? (
                      <p className="project-desc">{props.children}</p>
                    ) : (
                      PortableText.defaultSerializers.types.block(props)
                    ),
                },
              }}
            />
          </div>
        </div>
      </div>
      <SectionDivider
        style={{
          marginTop: "0px",
          marginBottom: "0px",
          borderBottom: "1px solid #aaaadd",
        }}
      />
      <div className="container">
        <div className="project-navigation">
          <span>
            {prevProject ? (
              <Link
                href={`/work/${prevProject.slug}`}
                className="project-nav-link"
              >
                <FiArrowLeft />
                Prev: {prevProject.title}
              </Link>
            ) : (
              <span className="project-nav-link project-nav-link--disabled">
                <FiArrowLeft />
                Prev
              </span>
            )}
          </span>
          <span>
            {nextProject ? (
              <Link
                href={`/work/${nextProject.slug}`}
                className="project-nav-link"
              >
                Next: {nextProject.title}
                <FiArrowRight />
              </Link>
            ) : (
              <span className="project-nav-link project-nav-link--disabled">
                Next
                <FiArrowRight />
              </span>
            )}
          </span>
        </div>
      </div>
      <SectionDivider
        style={{
          marginTop: "0px",
          marginBottom: "64px",
          borderBottom: "1px solid #aaaadd",
        }}
      />
    </>
  );
}
