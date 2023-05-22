import React from "react";
import { Form, Input, Rate, Button } from "antd";
import styles from "./ReviewForm.module.css";
import { useReviewForm } from "./useReviewForm";

const ReviewForm = ({ restaurantId, refetch }) => {
  const { onFinish } = useReviewForm({ restaurantId, refetch });

  return (
    <Form onFinish={onFinish} className={styles.form}>
      <div className={styles.header}>
        <Form.Item name="name">
          <h1 className={styles.header_title}>Restorana Yorum Birakiniz!</h1>
        </Form.Item>
        <Form.Item name="rating" required>
          <Rate />
        </Form.Item>
      </div>

      <Form.Item name="name">
        <Input placeholder="Adinizi giriniz" autoComplete="off" required />
      </Form.Item>

      <Form.Item name="review">
        <Input.TextArea
          autoSize={{ minRows: 2, maxRows: 6 }}
          placeholder="Herhangi bir yorum!"
          rows={4}
          required
        />
      </Form.Item>

      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          style={{ width: "100%", fontWeight: "100" }}
        >
          Yorum Yaz!
        </Button>
      </Form.Item>
    </Form>
  );
};

export default ReviewForm;
