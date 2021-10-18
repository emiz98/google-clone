import { useStateValue } from "../../StateProvider";
import { actionTypes } from "../../reducer";
import { ChevronLeft, ChevronRight } from "@material-ui/icons";
import "./pagination.scss";

const staticCount = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

const Pagination = () => {
  const [{ PageNum }, dispatch] = useStateValue();

  const pageClick = (i) => {
    dispatch({
      type: actionTypes.SET_PAGE_NUM,
      PageNum: i - 1,
    });
    console.log(PageNum);
    if (i == staticCount[5]) {
      console.log("middle");
      // staticCount.push(staticCount.at(-1) + 1);
      // staticCount.shift();
    } else if (i > staticCount[5]) {
      console.log("right");
      staticCount.push(staticCount.at(-1) + 1);
      staticCount.shift();
    } else {
      if (staticCount.at(0) > 1) {
        console.log("left");
        staticCount.unshift(staticCount.at(0) - 1);
        staticCount.pop();
      }
    }
  };

  return (
    <div className="pagination">
      <div className="pagination_prev" onClick={(e) => pageClick(PageNum)}>
        <ChevronLeft />
        <span>Previous</span>
      </div>

      <span className="g">G</span>
      {staticCount.map((i) => (
        <span
          className={`o ${PageNum == i - 1 && "activePage"}`}
          onClick={(e) => pageClick(i)}
        >
          o <span>{i}</span>
        </span>
      ))}

      <span className="g">g</span>
      <span className="l">l</span>
      <span className="e">e</span>

      <div className="pagination_next" onClick={(e) => pageClick(PageNum + 2)}>
        <ChevronRight />
        <span>Next</span>
      </div>
    </div>
  );
};

export default Pagination;
