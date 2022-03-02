const Card = ({
  className,
  projectURL,
  projectName,
  projectDesc,
  projectScreenShot,
}) => {
  return (
    <a href={projectURL} style={{ textDecoration: "none", color: "black" }}>
      <div className={className}>
        <img
          className="project-img"
          src={projectScreenShot}
          alt={projectName}
        />

        <div className="card-info">
          <h3 className="project-name">{projectName}</h3>
          <p className="project-desc">{projectDesc}</p>
        </div>
      </div>
    </a>
  );
};
export default Card;
