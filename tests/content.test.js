import { timelineContent } from "../content/timeline";
import { content } from "../content/categories";
import { categories } from "../content/FAQs";
import { quiz } from "../content/quiz";

describe("Content", () => {
    test("Timeline Content Exists", () => {
        expect(timelineContent).toBeDefined();
    });
    test("Categories Content Exists", () => {
        expect(content).toBeDefined();
    });
    test("FAQs Content Exists", () => {
        expect(categories).toBeDefined();
    });
    test("Quiz Content Exists", () => {
        expect(quiz).toBeDefined();
    });
});
