// app/types.ts
export interface Post {
  id: number;
  title: string;
  tags: string[];
  reactions: { likes: number; dislikes: number };
  views: number;
  body?: string;
}

export interface Comments {
  id: number;
  body: string;
  likes: number;
  user: {
    username: string;
  };
}
