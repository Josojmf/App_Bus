import { PageProps } from "$fresh/server.ts";

const layout = (props: PageProps) => {
  const Component = props.Component;
  return (
    <html>
      <body>
        <h1 className="MainTitle">EMT</h1>
        <div className="MainLinks">
          <a href="/Stop" className="Link">Información Paradas</a>

          <br />
          <div>
            <a href="/StopLinesArrival" className="Link">Tiempos de llegada</a>
          </div>
          <div>
            <a href="/loginPage" className="Link">Login</a>
          </div>
        </div>
        <Component />
      </body>
    </html>
  );
};

export default layout;