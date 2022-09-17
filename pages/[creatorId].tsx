import { useRouter } from "next/router";

const Creator = () => {
  const router = useRouter();
  const { creatorId } = router.query;

  return <div>This is the page for creator id {creatorId}</div>;
};

export default Creator;
