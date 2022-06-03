

    const commentWrapEl = document.querySelector('.comment_wrap');
    const formEl = document.querySelector('form');    
    const inputEl = document.querySelector('input')
    
    

    const handleSubmit = (e) => {
        e.preventDefault();

    const inputValue = inputEl.value;
    inputEl.value = "";
    // console.log(inputValue);


    // 댓글을 저장할 태그 만들고
    const hEl = document.createElement('h4');

    // 생성한 태그 안쪽으로 value값 작성

    hEl.innerHTML = inputValue;
    // console.log(hEl);

    // 자식으로 생성한 태그 넣기

    commentWrapEl.append(hEl); 
    
    }


    formEl.addEventListener('submit', handleSubmit);

    
