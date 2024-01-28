import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion"

const faqData = [
	{
		id: "item-1",
		question: "What kind of game i can use Master Inventory for?",
		answer: "Master Inventory is a game agnostic tool. You can use it for any game you want. It's up to you to decide how you want to use it.",
	},
	{
		id: "item-2",
		question: "How Hard is it to use Master Inventory?",
		answer: "Master Inventory is designed to be easy to use. There is lots of tutorials you can explore.",
	},
	{
		id: "item-3",
		question: "Best place to get support?",
		answer: "Use your discord server to get support.",
	},
	{
		id: "item-4",
		question: "Bug and features request?",
		answer: "Use your discord server address any bug or features request.",
	}
];

export default function FaqSection() {
	return (
		<Accordion type="single" collapsible className="w-full">
			{faqData.map((faqItem) => (
				<AccordionItem key={faqItem.id} value={faqItem.id}>
					<AccordionTrigger>{faqItem.question}</AccordionTrigger>
					<AccordionContent>{faqItem.answer}</AccordionContent>
				</AccordionItem>
			))}
		</Accordion>
	)
}
