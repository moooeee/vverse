export const friends = [
  { image: "./avatar.png", online: true },
  { image: "./avatar.png", online: false },
  { image: "./avatar.png", online: false },
  { image: "./avatar.png", online: false },
  { image: "./avatar.png", online: false },
  { image: "./avatar.png", online: false },
  { image: "./avatar.png", online: false },
  { image: "./avatar.png", online: false },
  { image: "./avatar.png", online: false },
  { image: "./avatar.png", online: false },
  { image: "./avatar.png", online: false },
  { image: "./avatar.png", online: false },
  { image: "./avatar.png", online: false },
  { image: "./avatar.png", online: false },
  { image: "./avatar.png", online: false },
  { image: "./avatar.png", online: false },
  { image: "./avatar.png", online: false },
  { image: "./avatar.png", online: false },
  { image: "./avatar.png", online: false },
  { image: "./avatar.png", online: false },
  { image: "./avatar.png", online: false },
];

// to simulate an api request
export function getFriends() {
  return new Promise((res) => {
    setTimeout(() => {
      res(friends);
    }, Math.floor(Math.random() * 2000));
  });
}
