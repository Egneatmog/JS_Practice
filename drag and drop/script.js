// 드래그 할 녀석들 가져오기
const draggables = document.querySelectorAll('.draggable');
// 그 뒤의 컨테이너 가져오기
const containers = document.querySelectorAll('.container');

// 가져온 드래그 할 녀석들마다 이벤트 부여
draggables.forEach(draggable => {
    draggable.addEventListener('dragstart', () => {
        // 드래그 시작하면 dragging 이라는 클래스 부여
        draggable.classList.add('dragging');
    })

    draggable.addEventListener('dragend', () => {
        // 드래그 끝나면 dragging 이라는 클래스 제거
        draggable.classList.remove('dragging');
    })
})

// 가져온 컨테이너들마다 이벤트 부여
containers.forEach(container => {
    container.addEventListener('dragover', e => {
        // 해당 이벤트에 대한 기본 동작 실행하지 않도록 지정
        e.preventDefault();
        // getDragAfterElement() 함수에 컨테이너와
		// event.clientY 로 y의 좌표값을 전달
        const afterElement = getDragAfterElement(container, e.clientY)
        const draggable = document.querySelector('.dragging');
        if (afterElement == null) {
            container.appendChild(draggable);
        } else {
            container.insertBefore(draggable,afterElement)
        }
    })
})

function getDragAfterElement(container, y) {
    // ... 을 이용하여 컨테이너에서 드래그 하고 있지 않은 요소 가져옴
    const draggableElements = [
        ...container.querySelectorAll('.draggable:not(.dragging)')
    ]
    
    // Array.prototype.reduce()
    return draggableElements.reduce((closest, child) => {
        // getBoundingClientRect() 로 각 요소의 위치 값,
        // height, width 값들 리턴
        const box = child.getBoundingClientRect()
        // offset = 위치좌표로 box보다 위에 있으면 음수,
        // 아래있으면 양수
        const offset = y - box.top - box.height / 2
        // offset이 음수이면 위에 있으므로 사이에 넣어줄 수 있음
        if ( offset < 0 && offset > closest.offset) {
            return { offset : offset, element : child }   
        } else {
            return closest
        }
    }, { offset : Number.NEGATIVE_INFINITY }).element
}