interface Person{
    name: string
    age: number
    speak(lang: string): string
    spend(amount: number): number
}

const user: Person = {
    name: 'Kien',
    age: 21,
    // Lưu ý 2 thằng dưới chỉ là khai báo hàm nên không được truyền giá trị vào trong 2 hàm dưới
    speak(text: string): string{
        return text
    },
    spend(money: number): number{
        return money
    }
} 

const helloPerson = (person: Person):void => {
    console.log(`Hello my name is ${person.name}. I am ${person.age} . Do you have ${person.spend(25*2)} VNĐ? Can you speak ${person.speak('English')}`)
}
helloPerson(user)