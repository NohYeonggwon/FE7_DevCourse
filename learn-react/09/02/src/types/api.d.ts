interface Post {
  id: string;
  title: string;
  views: number;
}

interface Comments {
  id: number;
  text: string;
  postId: string;
}
