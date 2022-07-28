import { useRouter } from "next/router";

const ShortenedUrl: React.FC = () => {
  const router = useRouter();

  const id = parseInt(router.query.id as string);

  if (!isNaN(id)) {
    fetch("/api/hello", {
      method: "get",
      headers: {
        id: id.toString(),
      },
    })
      .then((response) => response.json())
      .then((json) => {
        window.location = json.url;
      })
      .catch((e) => {
        return <div>Something went wrong!</div>;
      });
  }

  return <div>Redirecting...</div>;
};

export default ShortenedUrl;
