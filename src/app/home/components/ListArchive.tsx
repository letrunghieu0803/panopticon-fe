export default function ListArchive() {
  const DATA = [
    { label: "삼성전자 기업 분석", date: "2024/11/11" },
    { label: "삼성전자 기업 분석", date: "2024/11/11" },
    { label: "삼성전자 기업 분석", date: "2024/11/11" },
    { label: "삼성전자 기업 분석", date: "2024/11/11" },
    { label: "삼성전자 기업 분석", date: "2024/11/11" },
    { label: "삼성전자 기업 분석", date: "2024/11/11" },
    { label: "삼성전자 기업 분석", date: "2024/11/11" },
    { label: "삼성전자 기업 분석", date: "2024/11/11" },
    { label: "삼성전자 기업 분석", date: "2024/11/11" },
    { label: "삼성전자 기업 분석", date: "2024/11/11" },
    { label: "삼성전자 기업 분석", date: "2024/11/11" },
  ];
  return (
    <div className="flex flex-col gap-2.5">
      {DATA.map((item, index) => {
        return (
          <div
            key={`ListArchive-${index}`}
            className="bg-white px-5 py-3.5 rounded-[10px] border-[#1C1C27] border-[2px]"
          >
            <p className="line-clamp-1 text-xs">{item.label}</p>
            <p className="line-clamp-1 text-xs">{item.date}</p>
          </div>
        );
      })}
    </div>
  );
}
