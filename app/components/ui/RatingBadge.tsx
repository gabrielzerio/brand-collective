export default function RatingBadge() {
  return (
    <div
      className="relative flex h-[46px] items-center gap-2 rounded-full px-4 py-2 sm:h-[50px] sm:gap-3 sm:px-5 md:h-[54px] md:w-[320px] md:gap-5 md:px-[26px] md:py-0 lg:h-[58px] lg:w-[350px] lg:gap-6 lg:px-[31px] group"
      style={{
        background: "linear-gradient(black, black) padding-box, linear-gradient(90deg, var(--color-accent) 0%, #58583B 100%) border-box",
        border: "1.94px solid transparent",
        boxShadow: "0px 0px 56.87px 0px #E1FA0059, 0px 0px 28.44px 0px #E1FA0040",
      }}
    >
      {/* Avatar Stack */}
      <div className="hidden -space-x-3 md:flex md:-space-x-4">
        {[1,2,3].map((i) => (
          <div
            key={i}
            className="flex h-[29px] w-[29px] select-none items-center justify-center rounded-full border-2 border-black bg-primary-light text-[10px] font-bold md:h-7 md:w-7 lg:h-8 lg:w-8"
          >
            {/* Placeholder for avatars */}
          </div>
        ))}
      </div>

      {/* Text and Rating */}
      <div className="flex flex-col gap-0.5 font-sans">
        <p className="text-[12px] font-medium leading-none text-white sm:text-[13px] md:text-[14px] lg:text-[16px]">
          Usado por <span className="text-accent font-bold">+200 Marcas</span>
        </p>
        <div className="flex items-center gap-2">
          <div className="flex gap-0.5">
            {[1, 2, 3, 4, 5].map((i) => (
              <svg
                key={i}
                width="10"
                height="10"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 0L8.5715 4.83688H13.6574L9.54295 7.82624L11.1144 12.6631L7 9.67376L2.88555 12.6631L4.45705 7.82624L0.342604 4.83688H5.4285L7 0Z"
                  fill="var(--color-accent)"
                />
              </svg>
            ))}
          </div>
          <span className="text-[11px] font-medium leading-none text-white/60 md:text-[12px] lg:text-[14px]">
            (4.9 / 5.0)
          </span>
        </div>
      </div>
    </div>
  );
}
