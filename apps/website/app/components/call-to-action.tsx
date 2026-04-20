import { audienceId, resend } from "@/lib/resend";

const CallToAction = async () => {
  const audience = await resend.contacts.list({
    segmentId: audienceId,
  });

  const count = audience.data?.data.length;

  return (
    <p>
      Follow me on{" "}
      <a
        href="https://x.com/rrcssantos"
        rel="noopener noreferrer"
        target="_blank"
      >
        X
      </a>
      , or join {count} people on my mailing list below for infrequent updates.
    </p>
  );
};

export { CallToAction };
