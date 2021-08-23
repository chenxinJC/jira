import { useArray, useMount } from 'utils'

export const TsReactTest = () => {
    const persons: { name: string; age: number }[] = [
        { name: 'jack', age: 25 },
        { name: 'ma', age: 26 },
    ]
    const { value, clear, removeIndex, add } = useArray(persons)

    useMount(() => {
        // console.log(value.notExist)
        // add({ name: "david" })
        // removeIndex("123")
    })

    return (
        <div>
            <button onClick={() => add({ name: 'john', age: 22 })}>add john</button>
            <button onClick={() => removeIndex(0)}>remove 0</button>
            <button onClick={() => clear()}>clearAll</button>
            {value.map((item, index) => (
                <p key={index}>{index + item.name + item.age}</p>
            ))}
        </div>
    )
}
