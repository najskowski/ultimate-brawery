import Image from "next/image"

interface ComponentProps {
  itemId: string,
  itemName: string
} 

export default function ItemImg({ itemId, itemName }: ComponentProps) {
  return (
    <Image 
      src={`https://ddragon.leagueoflegends.com/cdn/11.6.1/img/item/${itemId}.png`}
      width={100}
      height={100}
      alt={itemName}
    />
  )
}
