interface ErrorProps {
  error: {
    title: string;
    message: string;
    resolution: string;
  };
}

const Error = ({ error }: ErrorProps) => {
  return (
    <section className="mx-auto mt-24 max-w-3xl text-center">
      <p className="mb-11 text-[4rem]">&#128533;</p>
      <h2 className="mb-6 text-xl font-bold">{error.title}</h2>
      <p className="text-custom-838383 md:text-lg">
        {error.message} {error.resolution}
      </p>
    </section>
  );
};

export default Error;
