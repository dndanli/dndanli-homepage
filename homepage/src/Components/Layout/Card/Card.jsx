const Card = ({className,projectURL,projectName,projectDesc}) => {
  return (
    <a
      href={projectURL}
      style={{ textDecoration: "none", color: "black" }}
    >
      <div className={className}>
        <div>
          <h3 style={{color:"black"}}>{projectName}</h3>
          <h4 >{projectDesc}</h4>
        </div>
      </div>
    </a>
  );
};
export default Card;
