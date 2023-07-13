import React, { useState } from "react"
import { useGetCoinsNewsQuery } from "../services/newsApi"

const News = ({ leading }) => {
  const [searchCategory, setSearchCategory] = useState("Cryptocurrency")
  const { data: coinNews } = useGetCoinsNewsQuery({
    searchCategory,
    count: leading ? 4 : 80,
  })
  const substituteImage =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJhYmDmHbWjc02HQHhJlbL9Ckgq-FjCVkREWaqf_iNGg&s"

  // console.log(coinNews)

  if (!coinNews?.value) return "Loading..."
  return (
    <section className="container mx-auto px-6 py-6 lg:py-12">
      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-12 xl:grid-cols-4 2xl:gap-14">
        {coinNews.value.map((news, index) => (
          <div
            className=" flex flex-col rounded-2xl border-2 bg-[#001951] p-6 transition delay-75 duration-200 ease-in-out hover:scale-105 hover:bg-indigo-500 xl:hover:scale-110"
            key={index}
          >
            <div className="flex flex-row">
              <a href={news.url} target="_blank" rel="noreferrer" className="">
                <div className="flex flex-col space-y-4 text-center">
                  <h2 className="text-lg text-white xl:text-xl">{news.name}</h2>
                  <img
                    className="h-[48px] w-[48px] self-center"
                    src={news?.image?.thumbnail?.contentUrl || substituteImage}
                    alt=""
                  />
                  <p className="text-base text-[#00ff00] xl:text-lg">
                    {news.description.length > 100
                      ? `${news.description.substring(0, 50)}...`
                      : news.description}
                  </p>
                </div>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default News
