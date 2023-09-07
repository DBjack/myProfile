import "./home.css";
import ReactFullpage from "@fullpage/react-fullpage";
import Navbar from "../../layout/navBar/navBar";
function MySection(props) {
  return (
    <div className="section">
      <div style={{ width: "100vw", height: "100vh" }}>
        <span style={{ textAlign: "center", fontSize: "66px", color: "#fff" }}>
          {props.content}
        </span>
      </div>
    </div>
  );
}

function Home() {
  const anchors = ["firstPage", "secondPage", "thirdPage", ""];

  return (
    <div>
      <Navbar></Navbar>
      <div style={{ position: "fixed", zIndex: 100, color: "#fff" }}>
        <a href="#firstPage">首页</a>
        <a href="#secondPage">作品</a>
        <a href="#thirdPage">文档</a>
        <a href="#thirdPage">call me</a>
      </div>
      <ReactFullpage
        navigation
        scrollingSpeed={700} //切换的秒数
        continuousVertical={true} //是否循环 纵向循环
        anchors={anchors} // 每一部分的锚点, 就是url#后面的部分
        sectionsColor={["#282c34", "#ff5f45", "#0798ec"]} // 每一个部分你的背景色
        onLeave={(origin, destination, direction) => {
          console.log("onLeave event", { origin, destination, direction });
        }} // 离开某一部分你的回调, 参数分别表示从哪里开 去哪里 方向. 前两者是自定义类型nn, 方向是up或down
        render={({ state, fullpageApi }) => {
          console.log("render prop change", state, fullpageApi);
          return (
            <div>
              <MySection content={"page 1"} />
              <MySection content={"page 2"} />
              <MySection content={"page 3"} />
            </div>
          );
        }}
      />
    </div>
  );
}
export default Home;
