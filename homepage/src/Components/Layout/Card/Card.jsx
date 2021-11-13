const Card = ({className,projectURL,projectName,projectDesc}) => {
  return (
    <a
      href={projectURL}
      style={{ textDecoration: "none", color: "black" }}
    >
      <div className={className}>
        <div>
          <h3>{projectName}</h3>
            <p>{projectDesc}</p>
        </div>
      </div>
    </a>
  );
};
export default Card;
