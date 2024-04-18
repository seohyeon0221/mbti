import { results,mbtis } from "./data.js";
const mbti = new URLSearchParams(location.search).get("mbti")
console.log('mbti = ' + mbti)

const result = results[mbtis[mbti]]
// console.log(result)
const titleEl = document.querySelector(".page-title")
const charEl = document.querySelector(".character")
const boxEls = document.querySelectorAll(".box")
const jobsEl = document.querySelectorAll(".job")
const lectureEl = document.querySelector(".lecture")
const lectureImgEl = document.querySelector(".lecture img")


titleEl.innerHTML = result.title
charEl.src = result.character
boxEls.forEach(function(boxEl , index){
  boxEl.innerHTML = result.results[index]
})
jobsEl.forEach(function(job,index){
  job.innerHTML = result.jobs[index]
})
lectureEl.href = result.lectureUrl
lectureImgEl.src = result.lectureImg
