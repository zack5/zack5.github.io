import { useEffect, useRef } from "react";

declare global {
  interface Window {
    twttr?: any;
  }
}

export default function XEmbed({ url }: { url: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const hasRendered = useRef(false);

  useEffect(() => {
    if (!window.twttr || !containerRef.current) return;
    if (hasRendered.current) return;

    const tweetId = url.split("/status/")[1]?.split("?")[0];
    if (!tweetId) return;

    hasRendered.current = true;

    window.twttr.widgets.createTweet(
      tweetId,
      containerRef.current,
      { align: "center" }
    );
  }, [url]);

  return <div ref={containerRef} />;
}
