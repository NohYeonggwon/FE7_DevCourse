/* import Ex from "./components/Ex"; */
import Profile from "./components/Profile";

export default function App() {
  const handler = () => {
    alert("팔로우 완료");
  };

  const profileUser1 = {
    bgImg:
      "https://images.pexels.com/photos/158251/forest-the-sun-morning-tucholskie-158251.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    userImg:
      "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    userName: "Sally Ramos",
    instarId: "@sallytheramos",
    handler: handler,
  };

  const profileUser2 = {
    bgImg:
      "https://cdn.pixabay.com/photo/2024/11/08/12/57/cat-9183327_1280.jpg",
    userImg:
      "https://cdn.pixabay.com/objects3d/2025/07/11/04-16-02-377/render_720_720_0_340_0.png",
    userName: "Cat Love",
    instarId: "@catheart",
    handler: handler,
  };
  return (
    <div style={{ display: "flex" }}>
      <Profile profileUser={profileUser1} />
      <Profile profileUser={profileUser2} />
      {/* <Ex /> */}
    </div>
  );
}
