import Button from "../../../components/common/Button";

function ViewAllToggle({ hasMore, isExpanded, onClick }) {
  if (!hasMore) return null;

  return (
    <div className="mt-5 flex justify-center">
      <Button variant="secondary" onClick={onClick}>
        {isExpanded ? "Show Less" : "View All Holdings"}
      </Button>
    </div>
  );
}

export default ViewAllToggle;