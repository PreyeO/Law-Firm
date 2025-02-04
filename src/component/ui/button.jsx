import { memo } from "react";
import PropTypes from "prop-types";
import { PhoneCall } from "lucide-react";

const Button = memo(function AnimatedButton({
  children,
  withHeartbeat = false,
  className,
}) {
  const baseClasses = `
    group default-transition relative z-10 overflow-hidden flex items-center justify-center gap-[5px] rounded-full text-center  block
    before:left-0 before:absolute before:-z-[1] before:rounded-full before:w-[0%] before:top-0 before:bottom-0 before:transition before:[transition-property:width] before:[transition-duration:500ms]
    hover:before:w-full  before:bg-[#C9A13E] font-semibold text-base shadow-[0.15]
  `;

  return (
    <button
      className={`${baseClasses} ${className} font-semibold cursor-pointer`}
    >
      {children}

      {/* Add heartbeat effect for the PhoneCall icon */}
      {withHeartbeat && (
        <div
          className="flex-shrink-0 w-[26px] h-[26px] relative overflow-visible items-center"
          style={{ display: "inline-block" }}
        >
          <PhoneCall
            size={26}
            className="absolute left-0 top-0 group-hover:animate-heartbeat transform-origin-center"
          />
        </div>
      )}
    </button>
  );
});

Button.propTypes = {
  children: PropTypes.node.isRequired,
  withHeartbeat: PropTypes.bool,
  className: PropTypes.string,
};

export default Button;
