import "./ProgressGauges.scss";

const ProgressGauges = () => {
  return (
    <div>
      <div class="dashboard">
        <div className="dashboard__div">
          <svg>
            <circle class="bg" cx="57" cy="57" r="52" />
            <circle class="meter-1" cx="57" cy="57" r="52" />
          </svg>
          <h3>Daily challenges 3/4</h3>
        </div>
        <div className="dashboard__div">
          <svg>
            <circle class="bg" cx="57" cy="57" r="52" />
            <circle class="meter-2" cx="57" cy="57" r="52" />
          </svg>
          <h3>Weekly challenges 2/4</h3>
        </div>
        {/* <svg>
          <circle class="bg" cx="57" cy="57" r="52" />
          <circle class="meter-3" cx="57" cy="57" r="52" />
        </svg> */}
      </div>
    </div>
  );
};

export default ProgressGauges;
