import { CoffeeBean, Roast } from "@/types";
import { useForm } from "react-hook-form";
import { Button } from "./ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel } from "./ui/form";
import { Input } from "./ui/input";
import { InputTags } from "./ui/inputtags";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
export default function AddBeanForm({
  setBeanCatalog,
}: {
  setBeanCatalog: React.Dispatch<React.SetStateAction<CoffeeBean[]>>;
}) {
  const form = useForm({
    defaultValues: {
      name: "",
      origin: "",
      roaster: "",
      price: 0,
      weight: 0,
      roast: Roast.Light,
      flavorNotes: [],
    },
  });

  function handleSubmit(data: CoffeeBean) {
    setBeanCatalog((prev) => [data, ...prev]);
    console.log("Form submitted");
    console.log(data);
  }
  return (
    <Form {...form}>
      <form
        id="add-bean-form"
        className="max-w-max flex flex-col gap-4"
        onSubmit={form.handleSubmit(handleSubmit)}
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Bean Name</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Superb Blend" />
              </FormControl>
            </FormItem>
          )}
        ></FormField>
        <FormField
          control={form.control}
          name="roast"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Roast Level</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a roast level" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value={Roast.Light}>Light</SelectItem>
                  <SelectItem value={Roast.Medium}>Medium</SelectItem>
                  <SelectItem value={Roast.Dark}>Dark</SelectItem>
                </SelectContent>
              </Select>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="origin"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Origin</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Kenya, Colombia, Brazil" />
              </FormControl>
            </FormItem>
          )}
        ></FormField>
        <FormField
          control={form.control}
          name="roaster"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Roaster</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Awesome Coffee Roasters" />
              </FormControl>
            </FormItem>
          )}
        ></FormField>
        <div className="w-full flex gap-4">
          <FormField
            control={form.control}
            name="price"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Price</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="0" />
                </FormControl>
              </FormItem>
            )}
          ></FormField>
          <FormField
            control={form.control}
            name="weight"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Weight</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="0" />
                </FormControl>
              </FormItem>
            )}
          ></FormField>
        </div>
        <FormField
          control={form.control}
          name="flavorNotes"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Add Flavor Note(s)</FormLabel>
              <FormControl>
                <InputTags {...field} placeholder="Fruity" />
              </FormControl>
            </FormItem>
          )}
        />
        <Button className="max-w-max" type="submit">
          Submit
        </Button>
      </form>
    </Form>
  );
}
