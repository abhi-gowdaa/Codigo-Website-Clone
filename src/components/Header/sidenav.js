import classes from "./sidenav.module.css";

const Sidenav = (props) => {
  return (
    <div className={classes.cont}>
      <button onClick={props.buttons} className={classes.buttons}>
        X
      </button>
      <h1 className={classes.h1}>Request a quote</h1>
      <p>
        {" "}
        <h4 className={classes.p}>
          Get a ballpark costing on the product or idea you want to build. Be
          specific to get a more concise cost and timeline.
        </h4>
      </p>
      <h6 className={classes.h6}>MANDATORY FIELDS</h6>
      <hr></hr>
      <h3 className={classes.h3}>What do you need? *</h3>
      <form>
        <p className={classes.ul}>
          <input type="checkbox" className={classes.ip} /> <h3>Build an App</h3>
          <input type="checkbox" className={classes.ip} />{" "}
          <h3>Build an Website</h3>
        </p>

        <label>
          <h3 className={classes.h3}>
            What are the objectives, requirements and functionalities of this
            product? *
          </h3>
        </label>
        <textarea
          className={classes.ta}
          placeholder="You can list down everything in point form or just paragraphs. 
          Its completely up to you. The more details we get,
           the more we can understand what you want to achieve."
        />
      </form>
    </div>
  );
};

export default Sidenav;
