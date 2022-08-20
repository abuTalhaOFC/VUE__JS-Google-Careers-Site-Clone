const nextElementInList = (list, item) =>{
      
      const currentIndex = list.indexOf(item);
      const nextIndex = (currentIndex + 1) % list.length;
      const nextAction = list[nextIndex];
      return nextAction
}
export default nextElementInList