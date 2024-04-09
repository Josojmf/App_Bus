import { PageProps } from "$fresh/server.ts";

const layout = (props: PageProps) => {
  const Component = props.Component;
  return (
    <html>
      <body>
        <h1 className="MainTitle">EMT</h1>
        <div className="MainLinks">
          <a href="/search" className="Link">Search</a>

          <br />
          <div>
            <a href="/StopLinesArrival" className="Link">StopLinesArrival</a>
          </div>
        </div>
        <Component />
      </body>
    </html>
  );
};

export default layout;
