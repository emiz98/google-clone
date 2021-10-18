import { Share } from "@material-ui/icons";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./knowledgePanel.scss";

const KnowledgePanel = ({ data }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  var keys = [];
  for (var k in data) keys.push(k);

  const simpleToCapital = (title) => {
    const str = title.charAt(0).toUpperCase() + title.slice(1);
    return str;
  };

  return (
    <>
      {data?.title != "N/A" && (
        <>
          <div className="knowledgePanel">
            <div className="knowledgePanel_image_grid">
              <div className="wrapper">
                <div className="container">
                  {data?.images?.map((image) => (
                    <div key={image.url}>
                      <img src={image.url} alt="" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="knowledgePanel_header">
              <div className="knowledgePanel_header_left">
                <h2>{data?.title}</h2>
                <span>{data?.sub_title}</span>
              </div>
              <div className="knowledgePanel_header_right">
                {keys.includes("link") && (
                  <a target="_blank" href={data?.["link"]}>
                    <Share />
                  </a>
                )}
              </div>
            </div>
            <hr />
            <div className="knowledgePanel_content">
              {data?.description != "N/A" && <p>{data?.description}</p>}

              <div>
                {keys?.map(
                  (key) =>
                    typeof data[key] != "object" &&
                    key != "title" &&
                    key != "description" &&
                    key != "sub_title" &&
                    key != "link" && (
                      <div className="knowledgePanel_content_bold" key={key}>
                        <span>{simpleToCapital(key)}:</span> {data[key]}
                      </div>
                    )
                )}
              </div>
            </div>
            {data?.books && (
              <div className="knowledgePanel_books">
                <h4>Books</h4>
                <Slider {...settings}>
                  {data?.books?.map((book) => (
                    <div className="book" key={book.title}>
                      <img src={book.image} alt="" />
                      <span className="book_title">{book.title}</span>
                      <br />
                      <span className="book_year">{book.year}</span>
                    </div>
                  ))}
                </Slider>
              </div>
            )}
            {data?.movies && (
              <div className="knowledgePanel_movies">
                <h4>Movies and TV shows</h4>
                <Slider {...settings}>
                  {data?.movies?.map((movie) => (
                    <div className="movie" key={movie.title}>
                      <img src={movie.image} alt="" />
                      <span className="movie_title">{movie.title}</span>
                      <br />
                      <span className="movie_year">{movie.year}</span>
                    </div>
                  ))}
                </Slider>
              </div>
            )}
          </div>
        </>
      )}
    </>
  );
};

export default KnowledgePanel;
