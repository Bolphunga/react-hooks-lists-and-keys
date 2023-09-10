export default function ColorItem({color}) {
    return (
        <li key={color} style={{ color: color }}>{color}</li>
    )
}
