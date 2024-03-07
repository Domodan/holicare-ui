import React from "react";
import "gantt-task-react/dist/index.css";
import { ViewMode } from "gantt-task-react";
type ViewSwitcherProps = {
  isChecked: boolean,
  onViewListChange: (isChecked: boolean) => void,
  onViewModeChange: (viewMode: ViewMode) => void,
};
export const ViewSwitcher: React.FC<ViewSwitcherProps> = ({
  onViewModeChange,
  onViewListChange,
  isChecked,
}) => {
  return (
    <div className="container flex flex-row justify-between items-center">
      <div className="flex flex-row justify-around border-2 border-spacing-2">
        <button
          className="p-2 border-x"
          onClick={() => onViewModeChange(ViewMode.Hour)}
        >
          Hour
        </button>
        <button
          className="p-2 border-x"
          onClick={() => onViewModeChange(ViewMode.QuarterDay)}
        >
          Quarter of Day
        </button>
        <button
          className="p-2 border-x"
          onClick={() => onViewModeChange(ViewMode.HalfDay)}
        >
          Half of Day
        </button>
        <button className="p-2 border-x" onClick={() => onViewModeChange(ViewMode.Day)}>
          Day
        </button>
        <button
          className="p-2 border-x"
          onClick={() => onViewModeChange(ViewMode.Week)}
        >
          Week
        </button>
        <button
          className="p-2 border-x"
          onClick={() => onViewModeChange(ViewMode.Month)}
        >
          Month
        </button>
        <button
          className="p-2 border-x"
          onClick={() => onViewModeChange(ViewMode.Year)}
        >
          Year
        </button>
      </div>

      <div className="form-control">
        <label className="label cursor-pointer">
          <span className="label-text-alt p-2">Show Task List</span>
          <input type="checkbox" defaultChecked={isChecked}
            onClick={() => onViewListChange(!isChecked)} className="checkbox" />
        </label>
      </div>
    </div>
  );
};
