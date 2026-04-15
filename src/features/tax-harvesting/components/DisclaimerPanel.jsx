import Accordion from "../../../components/common/Accordion";
import { DISCLAIMER_ITEMS } from "../../../constants/disclaimer";

function DisclaimerPanel() {
  return (
    <div className="space-y-3">
      <div>
        <h3 className="text-lg font-semibold text-white">Important Notes & Disclaimers</h3>
        <p className="mt-1 text-sm leading-6 text-slate-300">
          Review these points before making any harvesting decision.
        </p>
      </div>

      <Accordion items={DISCLAIMER_ITEMS} />
    </div>
  );
}

export default DisclaimerPanel;