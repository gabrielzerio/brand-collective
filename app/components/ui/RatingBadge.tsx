export default function RatingBadge() {
  return (
    <div
      className="flex items-center gap-6 px-10 py-5 rounded-full w-fit relative group"
      style={{
        background: "linear-gradient(black, black) padding-box, linear-gradient(90deg, var(--color-accent) 0%, #58583B 100%) border-box",
        border: "1.94px solid transparent",
        boxShadow: "0px 0px 56.87px 0px #E1FA0059, 0px 0px 28.44px 0px #E1FA0040",
      }}
    >
      {/* Avatar Stack */}
      <div className="flex -space-x-4">
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="w-10 h-10 rounded-full border-2 border-black bg-primary-light flex items-center justify-center text-[10px] font-bold select-none"
          >
            {/* Placeholder for avatars */}
          </div>
        ))}
      </div>

      {/* Text and Rating */}
      <div className="flex flex-col gap-0.5 font-sans">
        <p className="text-[16px] text-white font-medium leading-none">
          Usado por <span className="text-accent font-bold">+200 Marcas</span>
        </p>
        <div className="flex items-center gap-2">
          <div className="flex gap-0.5">
            {[1, 2, 3, 4, 5].map((i) => (
              <svg
                key={i}
                width="14"
                height="14"
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
          <span className="text-[14px] text-white/60 font-medium leading-none">
            (4.9 / 5.0)
          </span>
        </div>
      </div>
    </div>
  );
}
