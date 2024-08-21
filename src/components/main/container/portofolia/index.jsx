import React from "react";
import Masonry from "react-masonry-css";
import "./portfolio.scss";
import ProjectBox from "./projectBox";
import { images } from "../../constants";
import { AppWrapAbout, MotionWrap } from "../../wrapper";

class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [
        {
          id: "1",
          preview: images.apart4,
          title: "Apartment",
          tag: "Living room",
        },
        {
          id: "2",
          preview: images.apart5,
          title: "Apartment",
          tag: "Living room",
        },
        {
          id: "3",
          preview: images.apart6,
          title: "Apartment",
          tag: "Living room",
        },
        {
          id: "4",
          preview: images.apart9,
          title: "Apartment",
          tag: "Bathroom",
        },
        {
          id: "5",
          preview: images.apart12,
          title: "Apartment",
          tag: "Badroom",
        },
        {
          id: "6",
          preview: images.apart10,
          title: "Apartment",
          tag: "Badroom",
        },
      ],
      filterResult: null,
      pickedFilter: "all",
      filterMenuActive: false,
      pickedFilterDropdown: "NEWEST",
    };
  }

  componentDidMount() {
    this.filterGallery("all");
  }

  filterGallery = (target) => {
    let projectsArr = [...this.state.projects];
    let result;

    if (target !== "all") {
      result = projectsArr.filter((project) => project.tag === target);
    } else {
      result = projectsArr;
    }

    this.setState({
      filterResult: result,
      pickedFilter: target,
      pickedFilterDropdown: "NEWEST",
    });
  };

  // FILTER DROP DOWN HOVER MENU FUNCTION
  filterMenuHover = (event) => {
    if (event) {
      this.setState({ filterMenuActive: true });
    } else {
      this.setState({ filterMenuActive: false });
    }
  };

  // FILTER DROP DOWN HANDLER
  filterDropDownHandler = (filter) => {
    this.setState({ pickedFilterDropdown: filter, filterMenuActive: false });

    let projectsArr = [...this.state.filterResult];
    let result;

    if (filter === "NEWEST") {
      result = projectsArr.sort((a, b) => (a.id > b.id ? 1 : -1));
    } else if (filter === "OLDEST") {
      result = projectsArr.sort((a, b) => (a.id > b.id ? 1 : -1)).reverse();
    }

    this.setState({ filterResult: result });
  };

  // RENDER
  render() {
    // PORTFOLIO GALLERY RENDER
    let projectsRender = null;
    if (this.state.filterResult) {
      projectsRender = this.state.filterResult.map((project) => (
        <ProjectBox
          preview={project.preview}
          key={project.id}
          title={project.title}
          tag={project.tag}
        />
      ));
    }
    // PORTFOLIO GALLERY BREAKPOINTS
    const portfolioBreakpoints = {
      default: 3,
      1100: 3,
      700: 2,
      500: 1,
    };
    // PORTFOLIO FILTER DROPDOWN MENY RENDER
    let filterDroppDown = null;
    if (this.state.filterMenuActive) {
      filterDroppDown = (
        <div className="portfolio__filter-menu shadow">
          <p
            className="font12"
            onClick={() => this.filterDropDownHandler("NEWEST")}
          >
            NEWEST
          </p>
          <p
            className="font12"
            onClick={() => this.filterDropDownHandler("OLDEST")}
          >
            OLDEST
          </p>
        </div>
      );
    }

    return (
      <div id="portfolio">
        <div className="wrapper">
          <h2 className="head-text-second">
            ТИ ЭЙ ДИ И <span>АПАРТМЕНТ</span>
          </h2>
          <h2 className="head-text-second">ЗАГВАР ЗУРАГ</h2>
          <Masonry
            breakpointCols={portfolioBreakpoints}
            className="my-masonry-grid"
            columnClassName="mint__gallery"
          >
            {projectsRender}
          </Masonry>
        </div>
      </div>
    );
  }
}

export default AppWrapAbout(
  MotionWrap(Portfolio, "app__footer"),
  "contact",
  "app__primarybg"
);

// export default Portfolio;
