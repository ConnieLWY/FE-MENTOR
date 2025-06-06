import "../app/globals.css";
import Image from "next/image";
export const HomeView: React.FC = () => {
  return (
    <div className="min-h-screen bg-yellow flex flex-col items-center justify-center gap-4">
      <div className="card">
        <Image
          src="/images/illustration-article.svg"
          alt="Article"
          width={522}
          height={522}
          className="rounded-[10px]"
        />
        <div className="card-content">
          <div className="card-tag">
            <button className="card-tag-button">
              <p>Learning</p>
            </button>
          </div>
          <div className="card-date">
            <p>Published 21 Dec 2023</p>
          </div>
          <p className="card-title">HTML & CSS foundations</p>
          <p className="card-description">
            These languages are the backbone of every website, defining
            structure, content, and presentation.
          </p>
        </div>
        <div className="card-author">
          <Image
            src="/images/image-avatar.webp"
            alt="Author"
            width={24}
            height={24}
            className="author-avatar"
          />
          <p className="author-name">Greg Hooper</p>
        </div>
      </div>
    </div>
  );
};
