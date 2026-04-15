import Tooltip from "../../../components/common/Tooltip";
import { HOW_IT_WORKS_POINTS } from "../../../constants/howItWorks";

function HowItWorksTooltip() {
  return (
    <Tooltip
      position="bottom"
      content={
        <div>
          <p className="mb-2 text-sm font-semibold text-white">How it works</p>

          <ul className="space-y-2 text-xs text-slate-300">
            {HOW_IT_WORKS_POINTS.map((point) => (
              <li key={point} className="flex gap-2">
                <span className="mt-1 text-blue-400">•</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      }
    >
      <button
        type="button"
        className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1.5 text-xs font-medium text-blue-300 hover:bg-blue-500/15"
      >
        How it works?
      </button>
    </Tooltip>
  );
}

export default HowItWorksTooltip;