import "./App.css";
import Card from "./component/Card";
import "./index.css";
import Data from "./component/Data";

function App() {
  let image =
    "https://i.pinimg.com/564x/a4/23/0f/a4230f6c4e62f8a5928d7e48dfc0c823.jpg";
  const link = "https://www.netflix.com/in/title/80100172";

  return (
    <>
      <h1 className="heading_style">List of top 5 Netflix Series in 2020</h1>
      <div className="row justify-content-center">
        {Data.map((val) => {
          return (
            <div
              className="col-3 col-ms-4  md-mx-1"
              style={{ marginLeft: "4rem" }}
            >
              <Card title={val.title} images={val.images} link={val.link} />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
