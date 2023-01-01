import { Puff } from "react-loader-spinner";
import { LoadingProps } from "@interfaces/Loading";

export const Loading = ({ ...props }: LoadingProps) => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <Puff
        height="80"
        width="80"
        radius={1}
        color="#FFF"
        ariaLabel="puff-loading"
        wrapperStyle={{}}
        visible={true}
      />
    </div>
  );
};
